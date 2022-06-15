# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Recipe.destroy_all
Recipebook.destroy_all

a1 = Recipebook.create(title:'cooking recipes', recipetype:'dinner')

a2 = Recipebook.create(title:'cooking ideads', recipetype:'breakfest')

a1.recipes.create(dishname:'steak', cal:323, intruction:'grill for so long')
a1.recipes.create(dishname:'meatloaf', cal:323, intruction:'bake so long')

a2.recipes.create(dishname:'french toast', cal:433, intruction:'bake for some amount of tinme')
a2.recipes.create(dishname:'eggs', cal:233, intruction:'cook for some amount of time')

puts "Recipebooks in db #{Recipebook.all.size}"
puts "Recipe in db #{Recipe.all.size}"