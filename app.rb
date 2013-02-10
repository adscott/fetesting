require 'sinatra'
require 'sinatra/json'

dictionary = File.readlines('dictionary.txt').map(&:strip).sort

get '/' do
  erb :index
end

get '/autocomplete' do
  term = params[:term].strip
  suggestions = term.empty? ? [] : dictionary.select { |word| word.start_with? term }
  suggestions = suggestions[0...7] if suggestions.size > 7
  json suggestions
end

get '/search' do
  erb :search
end
