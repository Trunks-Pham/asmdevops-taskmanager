package main

import (
    "task-manager-backend/database"
    "task-manager-backend/routes"
)

func main() {
    database.InitDB()
    r := routes.SetupRouter()
    r.Run(":8080")
}
