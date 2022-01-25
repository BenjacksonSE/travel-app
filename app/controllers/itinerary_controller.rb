class ItineraryController < ApplicationController
  
  def index
    render json: Itinerary.all
  end

  def create
    itinerary = @current_user.itineraries.create!(itineray_params)
    render json: itinerary, status: :created
  end

  private

  def itinerary_params
    params.permit(:title)
  end

end