import Fluent
import Vapor

final class Shop: Model, Content {
    static let schema = "shops"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "brandName")
    var brandName: String

    @Field(key: "city")
    var city: String

    init() {
        // This is intended
    }

    init(id: UUID? = nil, brandName: String, city: String) {
        self.id = id
        self.brandName = brandName
        self.city = city  
    }
}