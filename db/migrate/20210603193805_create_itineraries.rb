class CreateItineraries < ActiveRecord::Migration[6.1]
  def change
    create_table :itineraries do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end