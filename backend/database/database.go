package database

import (
	"log"
	"os"
	"task-manager-backend/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitDB() {
	// Attempt to remove the existing database file
	err := os.Remove("tasksmnaa.db")
	if err != nil && !os.IsNotExist(err) {
		log.Fatalf("Failed to remove existing database file: %v", err)
	}

	// Open a new database connection
	DB, err = gorm.Open(sqlite.Open("tasksmnaa.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}

	// Automatically migrate the schema
	err = DB.AutoMigrate(&models.Task{})
	if err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}
}
