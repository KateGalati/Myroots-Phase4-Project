class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :plant_name
      t.string :scientific_name
      t.string :light_requirement
      t.string :water_requirement
      t.string :humidity
      t.string :image

      t.timestamps
    end
  end
end
