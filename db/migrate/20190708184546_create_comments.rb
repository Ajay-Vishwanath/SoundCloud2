class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :artist_id, null: false
      t.integer :song_id, null: false
      t.integer :parent_comment_id
      

      t.timestamps
    end
  end
end
