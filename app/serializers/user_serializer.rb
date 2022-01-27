class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :mymaps

  has_many :mymaps
end
