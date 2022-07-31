json.extract! submission, :id, :user_id, :prompt, :response, :created_at, :updated_at
json.url submission_url(submission, format: :json)
