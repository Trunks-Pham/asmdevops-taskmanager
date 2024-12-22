package main

import (
	"task-manager-backend/database"
	"task-manager-backend/routes"

	"github.com/gin-contrib/cors"
)

func main() {
	database.InitDB()
	r := routes.SetupRouter()

	// Configure CORS
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // Replace with your frontend URL
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization"}
	r.Use(cors.New(config))

	r.Run(":8080")
}