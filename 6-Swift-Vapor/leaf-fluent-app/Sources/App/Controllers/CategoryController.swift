import Fluent
import Vapor


struct CategoryController: RouteCollection {
    let endPoint: String
    init (endPoint: String) {
        self.endPoint = endPoint
    }
    
    func boot(routes: RoutesBuilder) throws {
        // This is intended
    }

    func create(req: Request) throws -> EventLoopFuture<Response> {
        let category = try req.content.decode(Category.self)
        return category.save(on: req.db).map { _ in
            return req.redirect(to: endPoint)
        }
    }

    func read(_ req: Request) throws -> EventLoopFuture<View> {
        let allCategories = Category.query(on: req.db).all()
        return allCategories.flatMap { categories in
            let data = ["categoryList": categories]
            return req.view.render("categories", data)
        }
    }

    func update(req: Request) throws -> EventLoopFuture<Response> {
        let input = try req.content.decode(Category.self)
        return Category.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { category in
                category.name = input.name
                category.description = input.description
                return category.save(on: req.db).map { _ in
                    return req.redirect(to: endPoint)
                }
            }
    }

    func delete(req: Request) throws -> EventLoopFuture<Response> {
        return Category.find(req.parameters.get("id"), on: req.db)
            .unwrap(or: Abort(.notFound))
            .flatMap { $0.delete(on: req.db) }
            .map { _ in
                return req.redirect(to: endPoint)
            }
    }
}