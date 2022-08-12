# frozen_string_literal: true

class AddPromptTables < ActiveRecord::Migration[7.0]
  def change
    create_table :prompt_lengths do |t|
      t.string :content
      t.integer :weight, default: 1
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end

    create_table :prompt_topics do |t|
      t.string :content
      t.integer :weight, default: 1
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end

    create_table :prompt_grammars do |t|
      t.string :content
      t.integer :weight, default: 1
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end
  end
end
