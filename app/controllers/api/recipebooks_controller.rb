class Api::RecipebooksController < ApplicationController
    before_action :set_recipebook, only: [:show, :update, :destroy]

    def index 
        render json: Recipebook.all
    end

    def show
        render json: @recipebook
    end

    def create
        @recipebook = Recipebook.create(recipebook_params)
        if(@recipebook.save)
            render json: @recipebook
        else 
            render json: @recipebook.errors.full_message, status: 422
        end
    end

    def update
        if(@recipebook.update(recipebook_params))
            render json: @recipebook
        else 
            render json: @recipebook.errors.full_message, status: 422
        end
    end

    def destroy
        render json: @recipebook.destroy
    end

    private
    def set_recipebook 
        @recipebook = Recipebook.find(params[:id])
    end

    def recipebook_params
        params.require(:recipebook).permit(:title, :recipetype)
    end
end
