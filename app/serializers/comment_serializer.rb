class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :plant
  has_one :user
end
