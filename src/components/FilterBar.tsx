import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import {TaskStatusFilter} from '../types/task';

type FilterBarProps = {
  searchQuery: string;
  selectedFilter: TaskStatusFilter;
  onSearchChange: (value: string) => void;
  onFilterChange: (value: TaskStatusFilter) => void;
};

const filters: TaskStatusFilter[] = ['all', 'pending', 'completed'];

export function FilterBar({
  searchQuery,
  selectedFilter,
  onSearchChange,
  onFilterChange,
}: FilterBarProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>FILTERS</Text>
      <Text style={styles.heading}>Search and filter</Text>

      <TextInput
        placeholder="Search by title"
        placeholderTextColor="#98a2b3"
        style={styles.input}
        value={searchQuery}
        onChangeText={onSearchChange}
      />

      <View style={styles.filtersRow}>
        {filters.map(filter => {
          const isActive = selectedFilter === filter;

          return (
            <Pressable
              key={filter}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
              onPress={() => onFilterChange(filter)}>
              <Text
                style={[
                  styles.filterButtonText,
                  isActive && styles.filterButtonTextActive,
                ]}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 16,
    padding: 20,
  },
  eyebrow: {
    color: '#2f6f8f',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.1,
    marginBottom: 6,
  },
  heading: {
    color: '#0f172a',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 18,
  },
  input: {
    backgroundColor: '#f4f8fb',
    borderRadius: 12,
    color: '#101828',
    fontSize: 14,
    marginBottom: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  filterButton: {
    backgroundColor: '#f4f8fb',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  filterButtonActive: {
    backgroundColor: '#102a43',
  },
  filterButtonText: {
    color: '#334e68',
    fontSize: 13,
    fontWeight: '600',
  },
  filterButtonTextActive: {
    color: '#ffffff',
  },
});
