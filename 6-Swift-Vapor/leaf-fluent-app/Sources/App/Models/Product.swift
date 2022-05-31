import Fluent
import Vapor

final class Product: Model, Content {
    static let schema = "products"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String

    @Field(key: "category_id") 
    var category_id: UUID

    @Field(key: "value")
    var value: String


    init() { }

    init(id: UUID? = nil, name: String, category_id: String, value: String) {
        self.id = id
        self.name = name
        self.value = value
        self.category_id = UUID(uuidString: category_id)!
    }
}