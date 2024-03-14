# Get the directory where this script exists
$currentDirectory = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Change directory to the script directory
Set-Location $currentDirectory


# Run the command 'python manage.py runserver'
python manage.py runserver
