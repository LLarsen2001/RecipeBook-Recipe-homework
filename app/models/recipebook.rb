class Recipebook < ApplicationRecord
    has_many :recipes, dependent: :destroy
end
