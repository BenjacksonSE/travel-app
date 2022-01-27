class Event < ApplicationRecord
  validates :long, presence: true
  validates :lat, presence: true

  belongs_to :map
end
