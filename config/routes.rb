Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do

    resources :recipebooks do
 
      resources :recipes
 
    end
    get '/recipes', to: 'recipes#all_recipes'
    get '/recipes/:id', to: 'recipes#find_recipes'
    

  end
end
