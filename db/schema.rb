# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_220_809_101_812) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'passwordless_sessions', force: :cascade do |t|
    t.string 'authenticatable_type'
    t.bigint 'authenticatable_id'
    t.datetime 'timeout_at', precision: nil, null: false
    t.datetime 'expires_at', precision: nil, null: false
    t.datetime 'claimed_at', precision: nil
    t.text 'user_agent', null: false
    t.string 'remote_addr', null: false
    t.string 'token', null: false
    t.datetime 'created_at', precision: nil, null: false
    t.datetime 'updated_at', precision: nil, null: false
    t.index %w[authenticatable_type authenticatable_id], name: 'authenticatable'
  end

  create_table 'prompt_grammars', force: :cascade do |t|
    t.string 'content'
    t.integer 'weight', default: 1
    t.bigint 'added_by_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['added_by_id'], name: 'index_prompt_grammars_on_added_by_id'
  end

  create_table 'prompt_lengths', force: :cascade do |t|
    t.string 'content'
    t.integer 'weight', default: 1
    t.bigint 'added_by_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['added_by_id'], name: 'index_prompt_lengths_on_added_by_id'
  end

  create_table 'prompt_topics', force: :cascade do |t|
    t.string 'content'
    t.integer 'weight', default: 1
    t.bigint 'added_by_id', null: false
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['added_by_id'], name: 'index_prompt_topics_on_added_by_id'
  end

  create_table 'submissions', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.text 'prompt'
    t.text 'response'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['user_id'], name: 'index_submissions_on_user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email'
    t.string 'name'
    t.string 'japanese_name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'locale'
    t.string 'discord_username'
    t.string 'discord_id'
    t.integer 'discord_discriminator'
    t.boolean 'discord_reminders'
  end

  add_foreign_key 'prompt_grammars', 'users', column: 'added_by_id'
  add_foreign_key 'prompt_lengths', 'users', column: 'added_by_id'
  add_foreign_key 'prompt_topics', 'users', column: 'added_by_id'
  add_foreign_key 'submissions', 'users'
end
