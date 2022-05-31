import Fluent

struct CreateProduct: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        return database.schema("products")
            .id()
            .field("name", .string, .required)
            .field("description", .uuid, .required,.references("artists", "id"))
            .foreignKey("category_id", references: "categories", "id", onDelete: .cascade)
            .field("value", .string, .required)
            .create()
    }

    func revert(on database: Database) -> EventLoopFuture<Void> {
        return database.schema("products").delete()
    }
}