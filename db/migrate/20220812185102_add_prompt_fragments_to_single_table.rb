class AddPromptFragmentsToSingleTable < ActiveRecord::Migration[7.0]
  def up
    create_table(:prompt_fragments) do |t|
      t.string :content
      t.float :weight
      t.string :category
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end

    PromptLength.find_each do |prompt_length|
      PromptFragment.create(
        content: prompt_length.content,
        weight: prompt_length.weight,
        category: "length",
        added_by_id: prompt_length.added_by_id,
      )
    end
    PromptTopic.find_each do |prompt_topic|
      PromptFragment.create(
        content: prompt_topic.content,
        weight: prompt_topic.weight,
        category: "topic",
        added_by_id: prompt_topic.added_by_id,
      )
    end
    PromptGrammar.find_each do |prompt_grammar|
      PromptFragment.create(
        content: prompt_grammar.content,
        weight: prompt_grammar.weight,
        category: "grammar",
        added_by_id: prompt_grammar.added_by_id,
      )
    end

    drop_table :prompt_lengths
    drop_table :prompt_topics
    drop_table :prompt_grammars
  end

  def down
    create_table(:prompt_lengths) do |t|
      t.string :content
      t.integer :weight, default: 1
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end
    create_table(:prompt_topics) do |t|
      t.string :content
      t.integer :weight, default: 1
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end
    create_table(:prompt_grammars) do |t|
      t.string :content
      t.integer :weight, default: 1
      t.references :added_by, null: false, foreign_key: { to_table: 'users' }

      t.timestamps
    end

    PromptFragment.find_each do |fragment|
      case fragment.category
      when "length"
        PromptLength.create(
          content: fragment.content,
          weight: fragment.weight,
          added_by_id: fragment.added_by_id,
        )
      when "topic"
        PromptTopic.create(
          content: fragment.content,
          weight: fragment.weight,
          added_by_id: fragment.added_by_id,
        )
      when "grammar"
        PromptGrammar.create(
          content: fragment.content,
          weight: fragment.weight,
          added_by_id: fragment.added_by_id,
        )
      end
    end

    drop_table :prompt_fragments
  end
end






