class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.belongs_to :mymap, foreign_key: true
      t.float :long
      t.float :lat
      
      t.timestamps
    end
  end
end
