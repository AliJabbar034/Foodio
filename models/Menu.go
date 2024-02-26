package models

import "errors"

type Menu struct {
	ID           string   `bson:"_id" json:"_id"`
	Title        string   `bson:"title" json:"title"`
	Description  string   `bson:"description" json:"description"`
	Price        float64  `bson:"price" json:"price"`
	Category     string   `bson:"category" json:"category"`
	Image        []string `bson:"image" json:"image"`
	Ingredients  []string `bson:"ingredients" json:"ingredients"`
	Instructions string   `bson:"instructions" json:"instructions"`
	Quantity     int      `bson:"quantity" json:"quantity"`
}

func NewMenu(menu Menu) *Menu {

	return &Menu{
		ID:           menu.ID,
		Title:        menu.Title,
		Description:  menu.Description,
		Price:        menu.Price,
		Category:     menu.Category,
		Image:        menu.Image,
		Ingredients:  menu.Ingredients,
		Instructions: menu.Instructions,
		Quantity:     menu.Quantity,
	}
}

func ValidateMenu(menu Menu) error {

	if menu.Title == "" || menu.Description == "" || menu.Price == 0 || menu.Category == "" || len(menu.Image) == 0 {

		return errors.New("Invalid menu data")

	}
	return nil
}
