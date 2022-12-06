class PlantSerializer < ActiveModel::Serializer
  attributes :id, :plant_name, :scientific_name, :light_requirement, :water_requirement, :humidity, :image
end
