class Mymap < ApplicationRecord
    validates :title, presence: true

    belongs_to :user
    has_many :events
end