class AddProfileTypeToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_type, :string
  end
end
