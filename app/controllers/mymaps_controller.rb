class MymapsController < ApplicationController
  
  def index
    mymaps = Mymap.all
    render json: mymaps
  end

  def show
    mymap = Mymap.find(params[:id])
    render json: mymap, includes: :user, status: :ok
  end

  def create
    mymap = @current_user.mymaps.create!(mymap_params)
    render json: mymap, status: :created
  end

  private

  def mymap_params
    params.permit(:title)
  end

end