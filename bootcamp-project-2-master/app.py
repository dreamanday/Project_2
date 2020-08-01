from flask import Flask, render_template, redirect, jsonify
from flask_cors import CORS, cross_origin
import pymongo
import sys
# sys.path.insert(1,"./services")
import create_data
# import config

conn = f"mongodb+srv://Raul:bootcamp1234@cluster0.uatil.mongodb.net/Project_2?retryWrites=true&w=majority"
client = pymongo.MongoClient(conn)

db = client.Project_2
collection_computing = db.computing_efficiency
collection_microprocessors = db.microprocessor_clock_speed
collection_price_changes = db.price_changes_in_consumer_goods_and_services_in_the_usa_1997_2017
collection_non_commercial_flight_distance_records = db.non_commercial_flight_distance_records
collection_number_of_human_genome_base_pairs_sequenced_per_us = db.number_of_human_genome_base_pairs_sequenced_per_us
collection_supercomputer_power_flops = db.supercomputer_power_flops
collection_transistors_per_microprocessor = db.transistors_per_microprocessor
collection_conacyt_investment_by_entity_mexico = db.FOMIX_por_Entidad_Federativa_Apoyada_2017_vf

app = Flask(__name__)
cors = CORS(app, resources={r"/project-2-api/*": {"origins": "*"}})

@app.route('/')
@cross_origin()
def main():
    return render_template("index.html")

@app.route('/project-2-api/computing_efficiency.json', methods=['GET'])
@cross_origin()
def get_computing():
    mongo_values = collection_computing.find()
    return jsonify(create_data.create_computing_efficiency_dict(mongo_values))

@app.route('/project-2-api/microprocessor_clock_speed.json', methods=['GET'])
@cross_origin()
def get_microprocessors():
    mongo_values = collection_microprocessors.find()
    return jsonify(create_data.create_microprocessor_clock_speed_dict(mongo_values))

@app.route('/project-2-api/non_commercial_flight_distance_records.json', methods=['GET'])
@cross_origin()
def get_flight_distance():
    mongo_values = collection_non_commercial_flight_distance_records.find()
    return jsonify(create_data.create_non_commercial_flight_distance_records_dict(mongo_values))

@app.route('/project-2-api/number_of_human_genome_base_pairs_sequenced_per_us.json', methods=['GET'])
@cross_origin()
def get_human_genome():
    mongo_values = collection_number_of_human_genome_base_pairs_sequenced_per_us.find()
    return jsonify(create_data.create_number_of_human_genome_base_pairs_sequenced_per_us_dict(mongo_values))

@app.route('/project-2-api/price_changes_in_consumer_goods_and_services_in_the_usa_1997_2017.json', methods=['GET'])
@cross_origin()
def get_price_changes():
    mongo_values = collection_price_changes.find()
    return jsonify(create_data.create_price_changes_in_consumer_goods_and_services_in_the_usa_1997_2017_dict(mongo_values))

@app.route('/project-2-api/supercomputer_power_flops.json', methods=['GET'])
@cross_origin()
def get_supercomputer_flops():
    mongo_values = collection_supercomputer_power_flops.find()
    return jsonify(create_data.create_supercomputer_power_flops_dict(mongo_values))

@app.route('/project-2-api/transistors_per_microprocessor.json', methods=['GET'])
@cross_origin()
def get_transistors():
    mongo_values = collection_transistors_per_microprocessor.find()
    return jsonify(create_data.create_transistors_per_microprocessor_dict(mongo_values))

@app.route('/project-2-api/conacyt_investment_by_entity_mexico.json', methods=['GET'])
@cross_origin()
def get_investments():
    mongo_values = collection_conacyt_investment_by_entity_mexico.find()
    return jsonify(create_data.create_conacyt_investment_by_entity_mexico(mongo_values))

if __name__ == '__main__':
    app.run(debug=True)
