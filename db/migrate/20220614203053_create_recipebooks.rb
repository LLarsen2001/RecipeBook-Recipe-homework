class CreateRecipebooks < ActiveRecord::Migration[7.0]
  def change
    create_table :recipebooks do |t|
      t.string :title
      t.string :recipetype

      t.timestamps
    end
  end
end
