import Fluent
import Vapor

func routes(_ app: Application) throws {
    let productController = ProductController()
    
    app.get("products", use: productController.read)
    
    app.post("product", "create", use: productController.create)
    app.post("product", "update", ":id", use: productController.update)
    app.post("product", "delete", ":id", use: productController.delete)

    let categoryController = CategoryController()

    app.get("categories", use: categoryController.read)
    
    app.post("category", "create", use: categoryController.create)
    app.post("category", "update", ":id", use: categoryController.update)
    app.post("category", "delete", ":id", use: categoryController.delete)

    let shopController = ShopController()

    app.get("shops", use: shopController.read)
    
    app.post("shop", "create", use: shopController.create)
    app.post("shop", "update", ":id", use: shopController.update)
    app.post("shop", "delete", ":id", use: shopController.delete)
}
