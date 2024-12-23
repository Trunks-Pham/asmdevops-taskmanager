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
	err := os.Remove("tasksmnaa.db")
	if err != nil && !os.IsNotExist(err) {
		log.Fatalf("Failed to remove existing database file: %v", err)
	}

	DB, err = gorm.Open(sqlite.Open("tasksmnaa.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database!")
	}

	err = DB.AutoMigrate(&models.Task{})
	if err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}
}
