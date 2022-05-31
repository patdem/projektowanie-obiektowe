import Fluent
import Vapor


struct ShopController: RouteCollection {
    var endPoint = "/shops"
    func boot(routes: RoutesBuilder) throws {
        // This is intended
    }

    func create(req: Request) throws -> EventLoopFuture<Response> {
        let shop = try req.content.decode(Shop.self)
        return shop.save(on: req.db).map { _ in
            return req.redirect(to: endPoint)
        }
    }

    func read(_ req: Request) throws -> EventLoopFuture<View> {
        let allShops = Shop.query(on: req.db).all()
        return allShops.flatMap { shops in
            let data = ["shopList": shops]
            return req.view.render("shops", data)
        }
    }

    func update(req: Request) throws -> EventLoopFuture<Response> {
        let input = try req.content.decode(Shop.self)
        return Shop.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { shop in
                shop.brandName = input.brandName
                shop.city = input.city
                return shop.save(on: req.db).map { _ in
                    return req.redirect(to: endPoint)
                }
            }
    }

    func delete(req: Request) throws -> EventLoopFuture<Response> {
        return Shop.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .map { _ in
                return req.redirect(to: endPoint)
            }
    }
}