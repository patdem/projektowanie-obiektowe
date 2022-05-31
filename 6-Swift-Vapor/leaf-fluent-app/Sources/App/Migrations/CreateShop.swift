import Fluent

struct CreateShop: Migration {
    func prepare(on database: Database) -> EventLoopFuture<Void> {
        return database.schema("shop")
            .id()
            .field("brand_name", .string, .required)
            .field("city", .string, .required)
            .create()
    }

    func revert(on database: Database) -> EventLoopFuture<Void> {
        return database.schema("shops").delete()
    }
}