class MymapSerializer < ActiveModel::Serializer
  attributes :id, :title, :events

  has_many :events
end
