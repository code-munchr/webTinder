class ApplicationController < ActionController::Base
	before_action :configure_permitted_parameters, if: :devise_controller?

	private
	def configure_permitted_parameters
    # Permit the `subscribe_newsletter` parameter along with the other
    # sign up parameters.
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name,:last_name,:user_name, :bio, images: []  ])
  end
end
