package handlers

import (
	"net/http"
	"task-manager-backend/database"
	"task-manager-backend/models"

	"github.com/gin-gonic/gin"
)

// Get all tasks
func GetTasks(c *gin.Context) {
	var tasks []models.Task
	database.DB.Find(&tasks)
	c.JSON(http.StatusOK, tasks)
}

// Create a new task
func CreateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Create(&task)
	c.JSON(http.StatusOK, task)
}

// Update a task
func UpdateTask(c *gin.Context) {
	id := c.Param("id")
	var task models.Task
	database.DB.First(&task, id)
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	database.DB.Save(&task)
	c.JSON(http.StatusOK, task)
}

// Delete a task
func DeleteTask(c *gin.Context) {
	id := c.Param("id")
	database.DB.Delete(&models.Task{}, id)
	c.JSON(http.StatusOK, gin.H{"message": "Task deleted"})
}
