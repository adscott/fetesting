When /^I complete "(.*?)"$/ do |suggestion|
  click_link(suggestion)
end

Then /^I should see the following results:$/ do |results|
  results.raw.flatten.each do |value|
    page.should have_link(value)
  end
end
