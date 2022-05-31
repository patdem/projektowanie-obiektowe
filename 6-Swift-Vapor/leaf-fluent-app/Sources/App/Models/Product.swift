import Fluent
import Vapor

final class Product: Model, Content {
    static let schema = Config.productURL
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String

    @Field(key: "categoryId") 
    var categoryId: UUID

    @Field(key: "value")
    var value: String


    init() {
        // This is intended
    }

    init(id: UUID? = nil, name: String, categoryId: String, value: String) {
        self.id = id
        self.name = name
        self.value = value
        self.categoryId = UUID(uuidString: categoryId)!
    }
}