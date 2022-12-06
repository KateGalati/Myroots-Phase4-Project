class UserPlantSerializer < ActiveModel::Serializer
  attributes :id
  has_one :plant
  has_one :user
end
