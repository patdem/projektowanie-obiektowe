import Fluent
import Vapor


struct ProductController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {}

    func create(req: Request) throws -> EventLoopFuture<Response> {
        let product = try req.content.decode(Product.self)
        return product.save(on: req.db).map { _ in
            return req.redirect(to: "/products")
        }
    }

    func read(_ req: Request) throws -> EventLoopFuture<View> {
        let allProducts = Product.query(on: req.db).all()
        return allProducts.flatMap { products in
            let data = ["productList": products]
            return req.view.render("products", data)
        }
    }

    func update(req: Request) throws -> EventLoopFuture<Response> {
        let input = try req.content.decode(Product.self)
        return Product.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { product in
                product.name = input.name
                product.description = input.description
                product.category_id = input.category_id
                return product.save(on: req.db).map { _ in
                    return req.redirect(to: "/products")
                }
            }
    }


    func delete(req: Request) throws -> EventLoopFuture<Response> {
        return Product.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .map { _ in
                return req.redirect(to: "/products")
            }
    }
}