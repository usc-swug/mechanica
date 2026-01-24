#!/bin/bash

# Define output file
OUTPUT_FILE="compiled_output.txt"
# Define the separator
SEPARATOR="----------------------------------------"

# Clear existing output file or create a new one
> "$OUTPUT_FILE"

# Find all .md files, loop through them
# sort handles the order; remove it if order doesn't matter
find docs/ -type f -name "*.md" | sort | while read -r file; do
    echo "Processing $file..."
    
    # Optional: Add the filename as a header
    echo "File: $file" >> "$OUTPUT_FILE"
    echo "$SEPARATOR" >> "$OUTPUT_FILE"
    
    # Append the content of the file
    cat "$file" >> "$OUTPUT_FILE"
    
    # Add a separator at the end
    echo -e "\n$SEPARATOR\n" >> "$OUTPUT_FILE"
done

echo "Compilation complete! Saved to $OUTPUT_FILE"
