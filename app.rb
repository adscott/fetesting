require 'sinatra'
require 'sinatra/json'

dictionary = File.readlines('dictionary.txt').map(&:strip).sort

get '/' do
  erb :index
end

get '/autocomplete' do
  json dictionary.select { |word| word.start_with? params[:term] }[0...7]
end

get '/search' do
  erb :search
end
