class Api::RecipesController < ApplicationController
    before_action :set_recipebook
    before_action :set_recipe, only: [:show, :update, :destroy]

    def index 
        render json: @recipebook.recipes
    end

    def show
        render json: @recipe
    end

    def create
        @recipe = @recipebook.recipes.new(recipe_params)
        if(@recipe.save)
            render json: @recipe
        else
            render json: @recipe.errors.full_message, status: 422
        end
    end

    def update
        if(@recipe.update(recipe_params))
            render json: @recipe
        else
            render json: @recipe.errors.full_message, status: 422
        end
    end

    def destroy
        render json: @recipe.destroy
    end

    private
    def set_recipebook
        @recipebook = Recipebook.find(params[:recipebook_id])
    end

    def set_recipe 
        @recipe = @recipebook.recipes.find(params[:id])
    end

    def recipe_params 
        params.require(:recipe).permit(:dishname, :cal, :intruction)
    end
end
