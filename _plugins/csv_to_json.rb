Jekyll::Hooks.register :site, :post_write do |_site|
  Dir.glob(File.join("_site", "metadata", "providers", "*.csv")).each do |path|
    puts "Formatting CSV to JSON for #{path}"
    File.write(path.gsub("csv", "json"), JSON.dump(CSV.parse(File.read(path), headers: :first_row).map(&:to_h)))
  end
end
